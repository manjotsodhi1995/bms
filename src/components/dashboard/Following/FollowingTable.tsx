import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, Search } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";

const data: Follower[] = [
  {
    id: "xueh0xpf",
    name: "Alex Wilson",
    events: 2,
    followed_on: "24 Jul,20:24",
  },
  {
    id: "atzmz950",
    name: "Katie Johnson",
    events: 7,
    followed_on: "18 Jan,06:11",
  },
  {
    id: "6nn1ww0c",
    name: "Sarah Rodriguez",
    events: 10,
    followed_on: "16 Jun,04:02",
  },
  {
    id: "043gpwfr",
    name: "John Garcia",
    events: 8,
    followed_on: "29 May,12:26",
  },
  {
    id: "6skmearr",
    name: "Chris Smith",
    events: 5,
    followed_on: "14 Mar,22:25",
  },
  {
    id: "xvmc7ya9",
    name: "Tom Miller",
    events: 6,
    followed_on: "10 Nov,04:44",
  },
  {
    id: "q3hk0roa",
    name: "David Johnson",
    events: 8,
    followed_on: "03 Sep,02:55",
  },
  {
    id: "4dd5ykmx",
    name: "Sarah Davis",
    events: 5,
    followed_on: "06 Aug,22:36",
  },
  {
    id: "07yjag41",
    name: "Tom Miller",
    events: 4,
    followed_on: "11 Apr,17:35",
  },
  {
    id: "4nnd81pn",
    name: "Sarah Rodriguez",
    events: 7,
    followed_on: "16 May,22:47",
  },
];

export type Follower = {
  id: string;
  name: string;
  events: number;
  followed_on: string;
};

export const columns: ColumnDef<Follower>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="">{row.getValue("name")}</div>,
  },

  {
    accessorKey: "events",
    header: ({ column }) => {
      return (
        <div className="flex justify-end">
          <button
            className="flex"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Events
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("events")}</div>
    ),
  },
  {
    accessorKey: "followed_on",
    header: () => <div className="text-right">Followed on</div>,
    cell: ({ row }) => {
      // const date = TODO -- format date from api

      // Format the amount as a dollar amount

      return (
        <div className="text-right font-medium">
          {row.getValue("followed_on")}
        </div>
      );
    },
  },
  {
    id: "full_details",
    enableHiding: false,
    cell: ({ row }) => {
      const follower = row.original;

      return (
        <div className="flex justify-end">
          <Link
            to={`/dashboard/organizer/${follower.id}`}
            className="place-self-center bg-[#60769D] text-white px-2 py-1 rounded-md text-nowrap"
          >
            Full details
          </Link>
        </div>
      );
    },
  },
  {
    id: "unfollow",
    enableHiding: false,
    cell: ({}) => {
      return (
        <button className="bg-[#A05C8A] text-white px-2 py-1 rounded-md">
          Unfollow
        </button>
      );
    },
  },
];

export function FollowingTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,

    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,

      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <h3 className="text-2xl font-medium">Followers</h3>
      <div className="mt-4 flex w-full justify-between items-center py-4">
        <div className="relative w-1/2 flex items-center gap-2">
          <Search className="absolute left-2 size-5 text-gray-400 pointer-events-none" />
          <input
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="!pl-10 !h-12 !rounded-xl !bg-[#E6E6E682] max-w-sm w-full px-4 py-3 pl-[20px] border-none"
            placeholder="Search"
          />
        </div>
        <div className="flex w-1/2 items-center justify-end gap-6 md:gap-10">
          <button className="flex gap-2 bg-[#E6E6E682] px-6 py-3 items-center rounded-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.875 8.75V16.25C16.875 16.5815 16.7433 16.8995 16.5089 17.1339C16.2745 17.3683 15.9565 17.5 15.625 17.5H4.375C4.04348 17.5 3.72554 17.3683 3.49112 17.1339C3.2567 16.8995 3.125 16.5815 3.125 16.25V8.75C3.125 8.41848 3.2567 8.10054 3.49112 7.86612C3.72554 7.6317 4.04348 7.5 4.375 7.5H6.25C6.41576 7.5 6.57473 7.56585 6.69194 7.68306C6.80915 7.80027 6.875 7.95924 6.875 8.125C6.875 8.29076 6.80915 8.44974 6.69194 8.56695C6.57473 8.68416 6.41576 8.75 6.25 8.75H4.375V16.25H15.625V8.75H13.75C13.5842 8.75 13.4253 8.68416 13.3081 8.56695C13.1908 8.44974 13.125 8.29076 13.125 8.125C13.125 7.95924 13.1908 7.80027 13.3081 7.68306C13.4253 7.56585 13.5842 7.5 13.75 7.5H15.625C15.9565 7.5 16.2745 7.6317 16.5089 7.86612C16.7433 8.10054 16.875 8.41848 16.875 8.75ZM7.31719 5.44219L9.375 3.3836V10.625C9.375 10.7908 9.44085 10.9497 9.55806 11.0669C9.67527 11.1842 9.83424 11.25 10 11.25C10.1658 11.25 10.3247 11.1842 10.4419 11.0669C10.5592 10.9497 10.625 10.7908 10.625 10.625V3.3836L12.6828 5.44219C12.8001 5.55947 12.9591 5.62535 13.125 5.62535C13.2909 5.62535 13.4499 5.55947 13.5672 5.44219C13.6845 5.32492 13.7503 5.16586 13.7503 5C13.7503 4.83415 13.6845 4.67509 13.5672 4.55782L10.4422 1.43282C10.3841 1.37471 10.3152 1.32861 10.2393 1.29715C10.1635 1.2657 10.0821 1.24951 10 1.24951C9.91787 1.24951 9.83654 1.2657 9.76066 1.29715C9.68479 1.32861 9.61586 1.37471 9.55781 1.43282L6.43281 4.55782C6.31554 4.67509 6.24965 4.83415 6.24965 5C6.24965 5.16586 6.31554 5.32492 6.43281 5.44219C6.55009 5.55947 6.70915 5.62535 6.875 5.62535C7.04085 5.62535 7.19991 5.55947 7.31719 5.44219Z"
                fill="#5F5F5F"
                fill-opacity="0.66"
              />
            </svg>
            Export
          </button>

          <span>Show</span>

          <Select
            defaultValue={20}
            size="small"
            sx={{
              backgroundColor: "#E6E6E682",
              paddingX: 2,
              borderRadius: 2,
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
          </Select>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
