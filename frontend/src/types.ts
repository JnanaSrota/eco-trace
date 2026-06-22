export interface RecieptItem {
    name: string;
    category: "food" | "transportation" | "household" | "fashion";
    estimated_co2_kg: number;

}

export interface ScanResult {
    items: RecieptItem[];
    total_co2_kg: number;
}