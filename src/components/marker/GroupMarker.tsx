import { MarkerSVGProps } from "../../types";
import CompleteBadgeMarker from "./CompleteBadgeMarker";
import CompleteBadgeWarningMarker from "./CompleteBadgeWarningMarker";
import CompleteMarker from "./CompleteMarker";

export default function MarkerSVG(props: MarkerSVGProps) {
  const { isBadge, isWarning, badgeText = "", ...svgProps } = props;

  const getSVG = () => {
    if (isWarning && isBadge) {
      const markProps = { badgeText, ...svgProps };
      return <CompleteBadgeWarningMarker {...markProps} />;
    }
    if (isBadge) {
      const markProps = { badgeText, ...svgProps };
      return <CompleteBadgeMarker {...markProps} />;
    }
    return <CompleteMarker {...svgProps} />;
  };

  return getSVG();
}
