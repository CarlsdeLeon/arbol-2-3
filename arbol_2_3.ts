class node23{

    private leftData: number | null = null;
    private rightData: number | null = null;

    private leftChild: node23 | null = null;
    private middleChild: node23 | null = null;
    private rightChild: node23 | null = null;

    private father: node23 | null = null;

    constructor(data?: number) {
        if (data !== undefined) {
            this.leftData = data;
        }
    }

    public setLeftData(data: number){
        this.leftData = data;
    }

    public setRigthData(data: number){
        this.rightData = data;
    }

    public setLeftChild(data: node23){
        this.leftChild = data;
    }

    public setRigthChild(data: node23){
        this.rightChild = data;
    }

    public setMiddleChild(data: node23){
        this.middleChild = data;
    }

    public setFather(data: node23){
        this.father = data;
    }

    public getLeftData(){
        return this.leftData;
    }

    public getRightData(){
        return this.rightData;
    }

    public getLeftChild(){
        return this.getLeftChild;
    }

    public getRightChild(){
        return this.rightChild;
    }

    public getMiddleChild(){
        return this.middleChild;
    }

    public getFather(){
        return this.father;
    }
    
    
}