class Vertex {
    constructor(key, viseted, adjacency = []) {
        this.key = key;
        this.viseted = viseted;
        this.adjacency = adjacency;
    }

    adjacencyList() {
        let list = this.key;

        this.adjacency.forEach(
            e => list += " ->" + e.destiny.key);
        console.log(list);
    }

}
export default Vertex;
