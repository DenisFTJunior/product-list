export type Rules = { func: (v: any) => boolean; message: string }[];

export const validateRules = (value: any,  rules: Rules, ) => {
  return rules
    .map((rule) => {
      const { func, message } = rule;
      return func(value) ? undefined :  message;
    })
    .filter(Boolean);
};
