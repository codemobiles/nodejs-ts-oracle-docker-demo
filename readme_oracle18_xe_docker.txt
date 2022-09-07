# Overview
1. Server must not be Apple M1/2 (oracle docker still not supported)
  - I used to test on both (apple intel and linux rocky)
2. git clone https://github.com/oracle/docker-images.git
3. cd docker-images/OracleDatabase/SingleInstance/dockerfiles/18.4.0
4. docker build -t oracle-db-18c -f Dockerfile.xe .
5. Create container
      docker run --name OracleXE \
      -p 1521:1521 \
      -p 5500:5500 \
      -e ORACLE_PWD=mflv12341234 \
      -e ORACLE_CHARACTERSET=TH8TISASCII \
      -d oracle-db-18c
6. Test connection with sqlplus
      docker exec -it OracleXE sqlplus system/mflv12341234@xe
7. Create an account (username: demo, password: demo@!Pwd) to access database vai sqlplus
    SQL> alter session set "_ORACLE_SCRIPT"=true;  
    SQL> create user demo identified by "demo@!Pwd";

    # enable permission
      SQL> GRANT ALL PRIVILEGES TO demo;
      SQL> grant unlimited tablespace to demo;
    # enable permission one by one
      SQL> grant connect to demo;
      SQL> grant create view to demo;
      SQL> grant create table to demo;
      SQL> grant create trigger to demo;
      SQL> grant alter any table to demo;

8. Test connection with SQLDeveloper
   + Download https://www.oracle.com/database/sqldeveloper/technologies/download/      
   + Install JDK as the program request 
   + Open and create connection with following meta:
     - name: <connection-alias>
     - username: demo, password: demo@!Pwd
     - host: ip address or localhost
     - sid: xe (default system id - it is like database name)
   + Click test connection  
       
9. Done
