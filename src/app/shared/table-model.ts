import { ColoumnModel } from './coloumn-model';

export class TableModel{
    /**
     - Table should have list of class which belongs to parent table div
     - Table should have list of class which belongs to tr
     - Table should have list of class which belongs to th
     - Table should have list of coloumns headers which should have coloumns list to iterate
     - Table should have list of coloumn body which should have list of values to iterate
     */
    constructor(public classList: string[], public trClassList: string[], public thClassList: string,
        public coloumnModel: ColoumnModel<any>

    ) {   }
}