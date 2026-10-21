'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { fetchClient } from 'fumadocs-core/search/client/fetch';
import { useOnChange } from 'fumadocs-core/utils/use-on-change';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
  TagsList,
  TagsListItem,
} from 'fumadocs-ui/components/dialog/search';
import { previewDocsRoute } from '@/lib/shared';

const versions = [
  { name: 'Fanta 1.0', value: 'v1' },
  { name: 'Fanta 2.0 preview', value: 'v2' },
];

/**
 * Search one docs version at a time, starting with the one being read.
 *
 * Fumadocs' `DefaultSearchDialog` renders its tag footer outside the dialog
 * content, which would leave the version tags showing on every page, so the
 * dialog is composed here with the footer inside it.
 */
export function VersionedSearchDialog({ open, onOpenChange }: SharedProps) {
  const pathname = usePathname();
  const readingPreview = pathname === previewDocsRoute || pathname.startsWith(`${previewDocsRoute}/`);
  const defaultTag = readingPreview ? 'v2' : 'v1';
  const [tag, setTag] = useState<string | undefined>(defaultTag);
  useOnChange(defaultTag, (current) => {
    setTag(current);
  });
  const { search, setSearch, query } = useDocsSearch({ client: fetchClient({ tag }) });

  return (
    <SearchDialog
      open={open}
      onOpenChange={onOpenChange}
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
        <SearchDialogFooter>
          <TagsList tag={tag} onTagChange={setTag}>
            {versions.map((version) => (
              <TagsListItem key={version.value} value={version.value}>
                {version.name}
              </TagsListItem>
            ))}
          </TagsList>
        </SearchDialogFooter>
      </SearchDialogContent>
    </SearchDialog>
  );
}
