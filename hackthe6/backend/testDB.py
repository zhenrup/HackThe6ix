from dbfunc import DBFunc

yass = DBFunc("postgres://demo:demo20972@127.0.0.1:26257?sslmode=require")
print(yass.findAisle("lights"))