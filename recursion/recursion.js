module.exports = function recursion(tree) {
    const result = [];
    function treeTraversal(node, num) {
        if (!result[num]) {
            result[num] = [];
            result[num].push(node.value);
        } else {
            result[num].push(node.value); 
        }
        if (node.left) treeTraversal(node.left, ++num);
        if (node.right) treeTraversal(node.right, num++);
    }
    treeTraversal(tree, 0);
    return result;
}