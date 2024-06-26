import React, { ReactElement, CSSProperties } from 'react';
import { DropzoneOptions } from 'react-dropzone';
import Cropper from 'cropperjs';

type CropperOptions = Cropper.Options;
type UserInterfaceOptions = {
    title: string | ReactElement;
    save: string | ReactElement;
};
type StyleOverrides = {
    overlay?: CSSProperties;
    modal?: CSSProperties;
    saveButton?: CSSProperties;
    title?: CSSProperties;
    cropper?: CSSProperties;
};
type OutputOptions = {
    height?: number;
    width?: number;
    maxHeight?: number;
    maxWidth?: number;
    format: 'image/png' | 'image/jpeg' | 'image/webp';
    compression?: number;
};
interface ReactImageCropperDropzoneProps {
    children: React.ReactNode;
    afterCrop: (dataUrl: string) => void;
    cropper?: Cropper.Options;
    dropzone?: DropzoneOptions;
    ui?: UserInterfaceOptions;
    styles?: StyleOverrides;
    output?: OutputOptions;
}
declare const ReactImageCropperDropzone: React.FC<ReactImageCropperDropzoneProps>;

export { CropperOptions, OutputOptions, ReactImageCropperDropzone, ReactImageCropperDropzoneProps, StyleOverrides, UserInterfaceOptions, ReactImageCropperDropzone as default };
