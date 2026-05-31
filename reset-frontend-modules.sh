#!/bin/sh
docker compose down
docker volume rm finances_frontend_node_modules
docker compose up --build frontend
