docker run \
    --publish=6379:6379 \
    --volume=$PWD/redis/data:/data \
    -d redis redis-server --appendonly yes

