//https://leetcode.com/problems/invert-binary-tree/description/

var invertTree = function (root) {
  function invert(root) {
    if (root == null) return;

    invert(root.left);
    invert(root.right);

    let tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;
  }

  invert(root);

  return root;
};
