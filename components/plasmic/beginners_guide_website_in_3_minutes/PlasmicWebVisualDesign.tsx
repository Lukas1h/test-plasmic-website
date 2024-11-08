// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gd1H1uCWRH6F4jKe3bUHd7
// Component: Z5a4-9abdCVS

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import NavigationBar from "../../NavigationBar"; // plasmic-import: MmyIgM8jvicw/component
import ProjectHeader from "../../ProjectHeader"; // plasmic-import: l-YePU5VGW3b/component
import ProjectCard from "../../ProjectCard"; // plasmic-import: LCJn7xNW9o65/component
import ContactSection from "../../ContactSection"; // plasmic-import: nBfKaxyhlTEF/component
import Footer from "../../Footer"; // plasmic-import: zFqZks37Uj94/component

import { useScreenVariants as useScreenVariants_98Gs1GP2Kmm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 98Gs-1gP2kmm/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: gd1H1uCWRH6F4jKe3bUHd7/projectcss
import sty from "./PlasmicWebVisualDesign.module.css"; // plasmic-import: Z5a4-9abdCVS/css

createPlasmicElementProxy;

export type PlasmicWebVisualDesign__VariantMembers = {};
export type PlasmicWebVisualDesign__VariantsArgs = {};
type VariantPropType = keyof PlasmicWebVisualDesign__VariantsArgs;
export const PlasmicWebVisualDesign__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWebVisualDesign__ArgsType = {};
type ArgPropType = keyof PlasmicWebVisualDesign__ArgsType;
export const PlasmicWebVisualDesign__ArgProps = new Array<ArgPropType>();

export type PlasmicWebVisualDesign__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  projectHeader?: Flex__<typeof ProjectHeader>;
  h2?: Flex__<"h2">;
  contactSection?: Flex__<typeof ContactSection>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultWebVisualDesignProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicWebVisualDesign__RenderFunc(props: {
  variants: PlasmicWebVisualDesign__VariantsArgs;
  args: PlasmicWebVisualDesign__ArgsType;
  overrides: PlasmicWebVisualDesign__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_98Gs1GP2Kmm()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicWebVisualDesign.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicWebVisualDesign.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicWebVisualDesign.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicWebVisualDesign.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicWebVisualDesign.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicWebVisualDesign.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            className={classNames("__wab_instance", sty.navigationBar)}
          />

          <ProjectHeader
            data-plasmic-name={"projectHeader"}
            data-plasmic-override={overrides.projectHeader}
            className={classNames("__wab_instance", sty.projectHeader)}
            timeline={"Sep - Dec 2023"}
            title={"Web Visual Design"}
          />

          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__yfvUz)}
            id={"Services"}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__wrl9W)}
              displayHeight={"700px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/beginners_guide_website_in_3_minutes/images/wallpaperJpg.jpg",
                fullWidth: 1921,
                fullHeight: 1081,
                aspectRatio: undefined
              }}
            />
          </Stack__>
          <Stack__
            as={"section"}
            hasGap={true}
            className={classNames(projectcss.all, sty.section__hgk1K)}
            id={"work"}
          >
            <div className={classNames(projectcss.all, sty.freeBox__gIznX)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3___0DBnn
                )}
              >
                {"The Client."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nSp8C
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__aacLq)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__maj5D
                )}
              >
                {"The Problem."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uifer
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__vLgyh)}>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__niC3Z
                )}
              >
                {"The Solution."}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bU21
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                }
              </div>
            </div>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section___2IGi)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__nskyY)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__u7Azr)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/beginners_guide_website_in_3_minutes/images/studentGae18422981280Jpg.jpg",
                    fullWidth: 1280,
                    fullHeight: 853,
                    aspectRatio: undefined
                  }}
                />

                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns__kWq3)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__cShid)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__nDlVi)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/beginners_guide_website_in_3_minutes/images/laptopG9B1Ff63691280Jpg.jpg",
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__m764U)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___4MBvc)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? "300px"
                          : "600px"
                      }
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"100%"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/beginners_guide_website_in_3_minutes/images/entrepreneurG23179Fc2C1280Jpg.jpg",
                        fullWidth: 1280,
                        fullHeight: 853,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__ymnDp)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__g5M9Q
                  )}
                >
                  {"The Process."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kMl2Q
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__eOlP)}
              id={"about"}
            >
              <div className={classNames(projectcss.all, sty.freeBox___3UdCd)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__omvBt)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/beginners_guide_website_in_3_minutes/images/laptopG9A7A99E251920Jpg.jpg",
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__tjvqi)}>
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___3DOaL
                  )}
                >
                  {"The Result."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mK9U1
                  )}
                >
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
                  }
                </div>
              </div>
            </Stack__>
            <Stack__
              as={"section"}
              hasGap={true}
              className={classNames(projectcss.all, sty.section__zvk58)}
              id={"contact"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__qc0Dl)}>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {"See my all other \nprojects."}
                </h2>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__vOwO)}
              >
                <div className={classNames(projectcss.all, sty.column__pBr1M)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard___1W4Sl
                    )}
                    image={{
                      src: "/plasmic/beginners_guide_website_in_3_minutes/images/abstractBackgroundJpg.jpg",
                      fullWidth: 1920,
                      fullHeight: 1171,
                      aspectRatio: undefined
                    }}
                    link={`/web-visual-design`}
                    title={"Web Visual Design"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column___5VRez)}>
                  <ProjectCard
                    className={classNames(
                      "__wab_instance",
                      sty.projectCard__xtGge
                    )}
                    link={`/project-relaunch`}
                    title={"Project Relaunch"}
                  />
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <ContactSection
            data-plasmic-name={"contactSection"}
            data-plasmic-override={overrides.contactSection}
            className={classNames("__wab_instance", sty.contactSection)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "projectHeader",
    "h2",
    "contactSection",
    "footer"
  ],
  navigationBar: ["navigationBar"],
  projectHeader: ["projectHeader"],
  h2: ["h2"],
  contactSection: ["contactSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  projectHeader: typeof ProjectHeader;
  h2: "h2";
  contactSection: typeof ContactSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWebVisualDesign__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWebVisualDesign__VariantsArgs;
    args?: PlasmicWebVisualDesign__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWebVisualDesign__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWebVisualDesign__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicWebVisualDesign__ArgProps,
          internalVariantPropNames: PlasmicWebVisualDesign__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWebVisualDesign__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWebVisualDesign";
  } else {
    func.displayName = `PlasmicWebVisualDesign.${nodeName}`;
  }
  return func;
}

export const PlasmicWebVisualDesign = Object.assign(
  // Top-level PlasmicWebVisualDesign renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    projectHeader: makeNodeComponent("projectHeader"),
    h2: makeNodeComponent("h2"),
    contactSection: makeNodeComponent("contactSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicWebVisualDesign
    internalVariantProps: PlasmicWebVisualDesign__VariantProps,
    internalArgProps: PlasmicWebVisualDesign__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Web Visual Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWebVisualDesign;
/* prettier-ignore-end */
