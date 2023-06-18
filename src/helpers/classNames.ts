type TClassesOptionsObject = Record<string, boolean | string>;

export function classNames(
  cls: string,
  classesOptionsObject: TClassesOptionsObject,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(classesOptionsObject)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
