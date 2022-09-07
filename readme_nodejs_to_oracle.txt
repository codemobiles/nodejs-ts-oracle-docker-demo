# You must install lib (instantclient) first to allow all api to connect the oracle database server
- Download: https://www.oracle.com/database/technologies/instant-client/macos-intel-x86-downloads.html
- select: Basic Package (ZIP)	
- unzip and rename to: instantclient
- save instantclient folder in /Users/chaiyasittayabovorn/instantclient
- mkdir ~/lib
- ln -s /Users/chaiyasittayabovorn/instantclient/libclntsh.dylib ~/lib/


# create project (with typeorm command)
npx typeorm init --name <project-name> --database oracle --express

update src/data-source.ts
make there is lib in  /Users/chaiyasittayabovorn/instantclient/lib/...

# update Router in UserController.ts
from 
private userRepository = getRepository(User);
to
private userRepository = AppDataSource.getRepository(User);

# run project
yarn start to run project

# after start, you should see the table user and some data is created.

# update findOne to findOneBy
    return this.userRepository.findOneBy({ id: request.params.id });
