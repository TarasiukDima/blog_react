type TClassesOptionsObject = Record<string, boolean | string>;

export function classNames(
  className: string,
  classesOptionsObject: TClassesOptionsObject = {},
  additional: string[] = []
): string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(classesOptionsObject)
      .filter(([_, value]) => Boolean(value))
      .map(([classNameItem]) => classNameItem),
  ].join(" ");
}
