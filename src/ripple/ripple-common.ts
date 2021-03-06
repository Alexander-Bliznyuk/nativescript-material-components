import { Color } from '@nativescript/core/color';
import { CSSType } from '@nativescript/core/ui/core/view';
import { StackLayout } from '@nativescript/core/ui/layouts/stack-layout';
import { cssProperty } from 'nativescript-material-core/cssproperties';

@CSSType('MDRipple')
export abstract class RippleBase extends StackLayout {
    @cssProperty rippleColor: Color;
}
