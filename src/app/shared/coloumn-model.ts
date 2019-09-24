export class ColoumnHeaderModel {


    // Coloumn Name should be used in proper order
    constructor(public coloumnName: string,
        public coloumnId: number,
        public dropDown: boolean = false,
        public dropValues: Array<string> = [""]
    ) {
    }

}

export class ColoumnBodyModel<T>{

    /**
     Here T should be iterable value of some type
    */
constructor(public iterable:T) {
    
}

}

export class ColoumnModel<T>{
    /**
     Expose Coloumn Model to the outer world
     */
    constructor(public coloumnBodyModel:ColoumnBodyModel<T>,public coloumnHeaderModel:ColoumnHeaderModel) {        
    }
}