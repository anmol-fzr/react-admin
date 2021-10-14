import React, { LegacyRef, MutableRefObject, RefCallback } from 'react';

// https://github.com/gregberge/react-merge-refs
export function mergeRefs<T = any>(
    refs: Array<MutableRefObject<T> | LegacyRef<T>>
): RefCallback<T> {
    return value => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref != null) {
                (ref as React.MutableRefObject<T | null>).current = value;
            }
        });
    };
}
