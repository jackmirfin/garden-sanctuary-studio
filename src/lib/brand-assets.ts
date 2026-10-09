import asset0 from "@/assets/advance/Advance_Gardens_Monoline_Landscape_Logo_ll86hg.png.asset.json"
import asset1 from "@/assets/advance/Blue_hour_townhouse_garden_retreat_i1i1b6.png.asset.json"
import asset2 from "@/assets/advance/Northamptonshire_Garden_Naturally_Transformed-1_rl719d.png.asset.json"
import asset3 from "@/assets/advance/Northampton_Garden_Before_Landscaping-3_nwiu6v.png.asset.json"
import asset4 from "@/assets/advance/Northampton_Patio_and_Lawn_Transformation-2_a7yeos.png.asset.json"
import asset5 from "@/assets/advance/Before_the_garden_makeover-7_loefry.png.asset.json"
import asset6 from "@/assets/advance/Finished_family_garden_transformation-6_ii9ymc.png.asset.json"
import asset7 from "@/assets/advance/Neglected_Courtyard_Before_Landscaping-5_zuur9l.png.asset.json"
import asset8 from "@/assets/advance/Warm_sandstone_courtyard_garden_makeover-4_ofcrt3.png.asset.json"

export const brandAssets = {
  logo: asset0.url,
  hero: asset1.url,
  supporting: asset2.url,
  projects: {
    northampton: {
      before:
        asset3.url,
      after:
        asset4.url,
    },
    family: {
      before:
        asset5.url,
      after:
        asset6.url,
    },
    courtyard: {
      before:
        asset7.url,
      after:
        asset8.url,
    },
  },
} as const
