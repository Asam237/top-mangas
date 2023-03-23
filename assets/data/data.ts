export interface mangaOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}
export const mangaOptions: readonly mangaOption[] = [
    { value: 'Action', label: 'Action', color: '#00B8D9' },
    { value: 'Science', label: 'Science', color: '#0052CC' },
    { value: 'Sport', label: 'Sport', color: '#5243AA' },
    { value: 'Football', label: 'Football', color: '#FF5630', isFixed: true },
    { value: 'Racing', label: 'Racing', color: '#FF8B00' },
    { value: 'Motor', label: 'Motor', color: '#FFC400' },
    { value: 'Fiction', label: 'Fiction', color: '#36B37E' },
    { value: 'Aventure', label: 'Aventure', color: '#00875A' },
    { value: 'Vampire', label: 'Vampire', color: '#253858' },
    { value: 'Romance', label: 'Romance', color: '#666666' },
];
