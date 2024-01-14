module github.com/eREDROCK/HAY_Face

go 1.20

replace local.packages/handler => ./handler

replace local.packages/domain => ./domain

require (
	local.packages/domain v0.0.0-00010101000000-000000000000
	local.packages/handler v0.0.0-00010101000000-000000000000
)

require (
	github.com/gorilla/websocket v1.5.1 // indirect
	golang.org/x/net v0.17.0 // indirect
)
