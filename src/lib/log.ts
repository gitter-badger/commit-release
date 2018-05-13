import chalk from 'chalk';

const isVerbose = process.env.NODE_ENV === 'development';

export const bug = (value: string, err: Error): void =>
  console.error(
    chalk.red('! %s\n\n! Please raise an issue at %s\n\n%s'),
    value,
    chalk.underline('https://github.com/JamieMason/commit-release/issues'),
    String(err.stack).replace(/^/gm, '    ')
  );
export const error = (value: string): void => console.error(chalk.red('! %s'), value);
export const info = (value: string): void => console.info(chalk.blue('i %s'), value);
export const success = (value: string): void => console.info(chalk.green('✓ %s'), value);
export const verbose = isVerbose
  ? (value: string): void => console.info(chalk.grey('? %s'), value)
  : (value: string): void => undefined;