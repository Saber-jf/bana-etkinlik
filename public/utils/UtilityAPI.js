class UtilityAPI {
  static classBuilder(classes) {
    return Object.keys(classes)
      .reduce(
        (t, k) =>
          classes[k]
            ? t.concat(k.split(" ").filter((c) => !t.find((tc) => tc === c)))
            : t,
        []
      )
      .join(" ");
  }
}

export default UtilityAPI;
