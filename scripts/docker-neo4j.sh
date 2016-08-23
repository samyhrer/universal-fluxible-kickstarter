docker stop neo4j && docker rm neo4j &&
docker run \
    -d \
    --name=neo4j \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=$PWD/neo4j/data:/data \
    --volume=$PWD/neo4j/conf:/conf \
    --net=backend \
    neo4j:3.0
