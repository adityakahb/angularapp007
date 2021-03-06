/*
 * This code snippet is based on
 * https://juristr.com/blog/2016/09/ng2-get-window-ref/
 */
import { Injectable } from '@angular/core';
declare const window: any;

function getWindow(): any {
    return window ? window : null;
}

@Injectable({
    providedIn: 'root',
})
export class WindowRefService {
    get nativeWindow (): Window {
        return getWindow();
    }
}