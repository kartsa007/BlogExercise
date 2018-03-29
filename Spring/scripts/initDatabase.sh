#!/bin/bash
PWD="mysql"
DB="blog"
TABLES="DB/Taulut.txt"
TABLES=$(dirname $(dirname $(realpath $0)))/$TABLES
DB_USER="spring"
PASSWD="spring"
HOST="ArchKari"

mysqlcmd() {
    args=""
    while [ "$#" -gt 1 ] ; do
	args="$args $1"
	shift
    done
    sudo mysql -u root -p${PWD} $args --execute "$1"
}

dbExists() {
    ret=$(mysqlcmd  "SHOW DATABASES LIKE '${DB}'" 2>&1 | grep -v Warning | wc -l)
    if [ $ret -gt "1" ]
    then
	echo "Yes"
    else
	echo "No"
    fi
}

dropDb() {
    mysqlcmd  "DROP DATABASE ${DB}" 2>&1 
}

initDb() {
    mysqlcmd "CREATE DATABASE ${DB}" 2>&1
    echo "Database created"
    #mysqlcmd -D ${DB} "SOURCE ${TABLES}" 2>&1
    #echo "Tables created"
}

createUser() {
    mysqlcmd "CREATE USER '${DB_USER}'@'${ArchKari}' IDENTIFIED BY '${PASSWD}'"
    mysqlcmd "GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP ON ${DB}.* TO '${DB_USER}'@'${ArchKari}'"
}

dropUser() {
    mysqlcmd "DROP USER '${USER}'@'${ArchKari}'"
}

if [ $(dbExists) == "Yes" ] 
then 
    ret=$(dropDb)
    echo "Dropped database ${DB}, $ret"
fi
echo "Initializing database ${DB}"
ret=$(initDb)
echo $ret
echo "Creating user"
ret=$(createUser)
echo $ret
echo "Done"
mysqlcmd "SHOW FULL TABLES FROM ${DB}"
mysqlcmd "SHOW SCHEMAS"
mysqlcmd "SHOW DATABASES LIKE '${DB}'" 2>&1 | grep -v "Warning" | wc
mysqlcmd "SHOW DATABASES LIKE '${DB}'" 2>&1 


#sudo mysql --execute "SHOW GRANTS"
#sudo mysql --execute "SELECT User FROM mysql.user"
#sudo mysql --execute "SELECT User, Host, Password FROM mysql.user"
#sudo mysqladmin  -h ${ArchKari} password \'mysql\'
#sudo mysql --execute "SELECT User, Host, Password FROM mysql.user"
