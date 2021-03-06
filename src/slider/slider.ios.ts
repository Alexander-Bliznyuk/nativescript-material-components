import { Color } from '@nativescript/core/color';
import { colorProperty } from '@nativescript/core/ui/styling/style-properties';
import { themer } from 'nativescript-material-core/core';
import { elevationProperty, rippleColorProperty } from 'nativescript-material-core/cssproperties';
import { thumbColorProperty, thumbHollowAtStartProperty, trackBackgroundColorProperty, trackFillColorProperty } from './cssproperties';
import { SliderBase } from './slider-common';

export class Slider extends SliderBase {
    nativeViewProtected: MDCSlider;
    constructor() {
        super();
        // this['css-height'] = 20;
    }
    public createNativeView() {
        const result = MDCSlider.new();
        // (result.subviews[0] as any).shouldDisplayInk = true;
        // (result.subviews[0] as any).shouldDisplayRipple = true;
        result.statefulAPIEnabled = true;
        (result as any).enableRippleBehavior = true;
        const colorScheme = themer.getAppColorScheme();
        if (colorScheme) {
            MDCSliderColorThemer.applySemanticColorSchemeToSlider(colorScheme, result);
        }
        return result;
    }
    [colorProperty.setNative](color: Color) {
        // super[colorProperty.setNative](color);
        if (!this.trackBackgroundColor) {
            this.trackBackgroundColor = new Color(66.3, color.r, color.g, color.b);
        }
        if (!this.trackFillColor) {
            this.trackFillColor = color;
        }
        if (!this.thumbColor) {
            this.thumbColor = color;
        }
    }
    [rippleColorProperty.setNative](color: Color) {
        // TODO: Why isn't the ripple color showing?
        (this.nativeViewProtected as any).rippleColor = color ? color.ios : null;
    }

    [thumbColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setThumbColorForState(color ? color.ios : null, UIControlState.Normal);
    }
    [trackBackgroundColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setTrackBackgroundColorForState(color ? color.ios : null, UIControlState.Normal);
    }
    [trackFillColorProperty.setNative](color: Color) {
        this.nativeViewProtected.setTrackFillColorForState(color ? color.ios : null, UIControlState.Normal);
    }
    [thumbHollowAtStartProperty.setNative](value: boolean) {
        this.nativeViewProtected.thumbHollowAtStart = value;
    }
    [elevationProperty.setNative](value: number) {
        this.nativeViewProtected.thumbElevation = value;
    }
}
