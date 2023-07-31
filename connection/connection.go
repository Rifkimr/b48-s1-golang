package connection

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4"
)

var Conn *pgx.Conn

func DataBaseConnect() {
	dataBaseUrl := "postgres://postgres:12345@localhost:5432/B48S1"
	 
	var err error 
	Conn, err = pgx.Connect(context.Background(), dataBaseUrl)
	 
	if err != nil {
		fmt.Fprint(os.Stderr, "ini contoh error to data base blabl", err)
		os.Exit(1)
	}

	fmt.Println("kalo muncuk ini berarti harusnya udah sukses connection ke data base!")
}