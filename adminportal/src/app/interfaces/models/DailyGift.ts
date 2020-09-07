export interface DailyGiftState {
    totalGiftsClaimed: number;
    dateNextGiftAvailable: Date;
    dateNextConsecutiveGiftAvailable: Date;
    consecutiveGiftsClaimed: number;
    maxConsecutiveGiftsClaimed: number;
}