import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { CommandModule } from 'yargs';

import { String } from '@microsoft/teams.common';

import { IContext } from '../../context';
import { Project } from '../../project';

type Args = {
  name: string;
};

export function Add(_: IContext): CommandModule<{}, Args> {
  const configsPath = path.resolve(url.fileURLToPath(import.meta.url), '../..', 'configs');

  return {
    command: 'add <name>',
    describe: 'add a configuration',
    builder: (b) => {
      return b.positional('name', {
        type: 'string',
        demandOption: true,
        choices: fs
          .readdirSync(configsPath)
          .map((name) =>
            fs.readdirSync(path.join(configsPath, name)).map((type) => `${name}.${type}`)
          )
          .flat(),
      });
    },
    handler: async ({ name }) => {
      const [type, subType] = name.split('.');
      const builder = Project.load();

      if (type === 'ttk') {
        builder.addTeamsToolkit(subType);
      }

      const project = builder.build();
      await project.up();
      console.log(
        new String().bold(new String().green(`✅ config "${name}" successfully added`)).toString()
      );
    },
  };
}
