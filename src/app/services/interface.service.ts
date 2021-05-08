export interface UnconfirmedTransaction {
    iD: string;
    senderAddress: string;
    receiverAddress: string;
    amount: number;
    createdDate: string;
}

export interface ConfirmedTransaction{
    iD: string;
    senderAddress: string;
    receiverAddress: string;
    amount: number;
    createdDate: string;
    confirmedDate: string;
    minerAddress: string;
}

export interface Block{
    index: number;
    minerAddress: string;
    minedDate: string;
    numberOfTransactions: number;
    // transactionsInBlock: ConfirmedTransaction[];
}
