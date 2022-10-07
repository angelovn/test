function sortArrTwoCriteria(arr) {
  // arr comes here
  function twoCriteriaSort(cur, next) {
    // arr elements come here
    if (cur.length === next.length) {
      return cur.localeCompare(next);
    }
    return cur.length - next.length;
  }
  arr.sort(twoCriteriaSort);
  console.log(arr.join(" "));
  arr.localeCompare();
}
sortArrTwoCriteria(["alpha", "beta", "gamma"]);
