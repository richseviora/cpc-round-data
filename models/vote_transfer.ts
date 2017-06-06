/**
 * The IVoteTransfer interface represents the number of votes that went from one candidate to another between rounds.
 * 
 * @interface IVoteTransfer
 */
interface IVoteTransfer {
    originRound: number;
    destinationRound: number;
    originCandidate: string;
    destinationCandidate: string;
}