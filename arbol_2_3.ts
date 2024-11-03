class Node23{

    private leftData: number | null = null;
    private rightData: number | null = null;
    private leftChild: Node23 | null;
    private middleChild: Node23 | null;
    private rightChild: Node23 | null;
    private parent: Node23 | null;

    constructor(leftData: number | null = null, rightData: number | null = null) {
        this.leftData = leftData;
        this.rightData = rightData;
        this.leftChild = null;
        this.middleChild = null;
        this.rightChild = null;
        this.parent = null;
    }

    public setLeftData(data: number | null){
        this.leftData = data;
    }

    public setRightData(data: number | null){
        this.rightData = data;
    }

    public setLeftChild(data: Node23 | null){
        this.leftChild = data;
    }

    public setRightChild(data: Node23 | null){
        this.rightChild = data;
    }

    public setMiddleChild(data: Node23 | null){
        this.middleChild = data;
    }

    public setParent(data: Node23 | null){
        this.parent = data;
    }

    public getLeftData(){
        return this.leftData;
    }

    public getRightData(){
        return this.rightData;
    }

    public getLeftChild(){
        return this.leftChild;
    }

    public getRightChild(){
        return this.rightChild;
    }

    public getMiddleChild(){
        return this.middleChild;
    }

    public getParent(){
        return this.parent;
    }
    
    public dataCount(): number {
        return this.rightData !== null ? 2 : 1;
    }
}

class Arbol23 {
    private root: Node23 | null = null;

    // Método para insertar un dato en el árbol
    public insert(data: number): void {
        if (this.root === null) {
            // Crear la raíz si el árbol está vacío
            this.root = new Node23(data);
        } else {
            // Insertar en el nodo existente
            this.insertIntoNode(this.root, data);
        }
    }

    private insertIntoNode(node: Node23, data: number): void {
        if (node.dataCount() === 1) {
            // Agregar un segundo dato al nodo
            if (data < node.getLeftData()!) {
                node.setRightData(node.getLeftData()!);
                node.setLeftData(data);
            } else {
                node.setRightData(data);
            }
        } else {
            // Necesitamos dividir el nodo
            this.splitNode(node, data);
        }
    }

    private splitNode(node: Node23, newData: number): void {
        let values = [node.getLeftData()!, node.getRightData()!, newData].sort((a, b) => a - b);
        let middleValue = values[1];

        // Crear nuevos nodos para la división
        let leftNode = new Node23(values[0]);
        let rightNode = new Node23(values[2]);

        // Redistribuir hijos
        if (node.getLeftChild()) leftNode.setLeftChild(node.getLeftChild());
        if (node.getRightChild()) rightNode.setLeftChild(node.getRightChild());

        // Manejar el padre
        if (node.getParent()) {
            this.promote(node.getParent(), middleValue, leftNode, rightNode);
        } else {
            // Crear nueva raíz
            this.root = new Node23(middleValue);
            this.root.setLeftChild(leftNode);
            this.root.setMiddleChild(rightNode);
            leftNode.setParent(this.root);
            rightNode.setParent(this.root);
        }
    }

    private promote(parent: Node23 | null, data: number, left: Node23, right: Node23): void {
        if (parent){
            if (parent.dataCount() === 1) {
                if (data < parent.getLeftData()!) {
                    parent.setRightData(parent.getLeftData()!);
                    parent.setLeftData(data);
                    parent.setMiddleChild(right);
                    parent.setLeftChild(left);
                } else {
                    parent.setRightData(data);
                    parent.setMiddleChild(right);
                    parent.setLeftChild(left);
                }
            } else {
                this.splitNode(parent, data);
            }
        }
    
    }

    public read(): number[] {
        return this.root ? this.readNode(this.root) : [];
    }

    private readNode(node: Node23 | null): number[] {
        const values: number[] = [];
        if (node){
            
            if (node.getLeftData() !== null) values.push(node.getLeftData()!);
            if (node.getRightData() !== null) values.push(node.getRightData()!);
            
            if (node.getLeftChild()) values.push(...this.readNode(node.getLeftChild()));
            if (node.getMiddleChild()) values.push(...this.readNode(node.getMiddleChild()));
            if (node.getRightChild()) values.push(...this.readNode(node.getRightChild()));
            
        }
        
        return values;


        
    }
}


const arbol = new Arbol23();
arbol.insert(10);
arbol.insert(20);
arbol.insert(5);
arbol.insert(15);

// Leer los datos del árbol
console.log(arbol.read()); // Deberías ver los datos en orden
