import * as images from "../assets/images";

export const recipes = [
    {
        id:1,
        columnN: "01",
        title: "Pre-Production",
        img1: images.recipe1,
        img2: images.recipe1_2,
        description:[
            {
                jn:"인사이트 기획",
                jd:["시장분석 / 니즈 분석 / 타겟분석"]
            },
            {
                jn:"비주얼 라이징",
                jd:["트리트먼트 > 스토리보드 > 콘티 순으로 발전",
                    "필요에 따라 3D공간 및 모델링을 제공"]
            },
        ]
    },
    {
        id:2,
        columnN: "02",
        title: "Production",
        img1: images.recipe2,
        img2: images.recipe2_2,
        description:[
            {
                jn:"스탭 구성",
                jd:["프로젝트 성격에 따라 퍼포먼스가 특화된 기준으로 스탭핑"]
            },
            {
                jn:"촬영",
                jd:["스토리보드 흐름에 맞춰 촬영진행"]
            },
        ]
    },
    {
        id:3,
        columnN: "03",
        title: "Post-Production",
        img1: images.recipe3,
        img2: images.recipe3_2,
        description:[
            {
                jn:"편집 및 디자인",
                jd:["컷편집 / 사운드디자인 / DI / 2D 및 CG",
                    "순차적으로 공유 후 디벨롭"]
            },
            {
                jn:"결과물 산출",
                jd:[]
            },
        ]
    }
];