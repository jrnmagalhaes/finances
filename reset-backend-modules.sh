#!/bin/sh
docker compose down
docker volume rm finances_backend_node_modules
docker compose up --build backend
