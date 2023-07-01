export type TClassesOptionsObject = Record<
  string,
  boolean | string | undefined
>;

export function classNames(
  className: string,
  classesOptionsObject: TClassesOptionsObject = {},
  additional: Array<string | undefined> = []
): string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(classesOptionsObject)
      .filter(([_, value]) => Boolean(value))
      .map(([classNameItem]) => classNameItem),
  ].join(" ");
}
