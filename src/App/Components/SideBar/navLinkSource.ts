export type TItem = {
    to: string;
    label: string;
};

export const itemsInit: Array<TItem> = [
    { to: "/dashboard", label: "home" },
    { to: "/notFoundPage", label: "Not Found Page" },
];