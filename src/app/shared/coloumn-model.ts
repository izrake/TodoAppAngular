export class ColoumnModel {


    // Coloumn Name should be used in proper order
    constructor(public coloumnName: string,
        public coloumnId: number,
        public dropDown: boolean = false,
        public dropValues: Array<string> = [""]
    ) {
    }

}