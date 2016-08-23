docker run \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=$PWD/neo4j/data:/data \
    --volume=$PWD/neo4j/conf:/conf \
    neo4j:3.0
