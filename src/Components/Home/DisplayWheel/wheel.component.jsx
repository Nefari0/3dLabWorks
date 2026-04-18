import {
  CubeContainer,
  Cube,
  FaceMapItem,
  ProjectCard
} from "./wheel.styles";

const TextCube = ({ state, mappedModels, mappedVideos, cubeRotations }) => {

    const {yRotation} = state;
    const mergedItems = [...mappedModels, ...mappedVideos];
    const cubeParams = 300;
    const circumference = cubeParams * mergedItems.length;
    const mappedFaces = mergedItems.map((el, i) => {
    const iter = i + 1;
    const negativeRotation = iter * cubeRotations + yRotation;
    
    return (
      <FaceMapItem
        key={i}
        cubeParams={cubeParams}
        i={i + 1}
        cubeRotations={cubeRotations}
        rotationIters={negativeRotation}
        yRotation={yRotation * iter}
      >
        <ProjectCard rotationIters={-negativeRotation}>{el}</ProjectCard>
      </FaceMapItem>
    );
  });

  return (
      <CubeContainer circumference={circumference}>
        {/* MANY SURFACE */}
        <Cube rotation={yRotation} cubeParams={(cubeParams * mergedItems.length) / 2}>
            {/* {mappedModels} */}
            {mappedFaces}
        </Cube>
      </CubeContainer>
  )};

export default TextCube;
