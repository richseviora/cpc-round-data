interface IRegion {
    /**
     * Name of the region.
     * 
     * @type {string}
     * @memberof IRegion
     */
    name: string;
    /**
     * The level of the region.
     * 
     * @type {number}
     * @memberof IRegion
     */
    regionLevel: number;
    /**
     * The area ID for this region.
     * NOTE: Should find out if there is an official dataset providing region IDs for extended analysis.
     * 
     * @type {number}
     * @memberof IRegion
     */
    areaId: number;
    /**
     * The voting rounds for this region.
     * 
     * @type {IRound[]}
     * @memberof IRegion
     */
    rounds: IRound[];
    voteTransfers: IVoteTransfer[];
    candidateRoundResults: ICandidateRoundResult[];
}