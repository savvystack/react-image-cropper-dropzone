import React, {Ref, useRef, useState, useImperativeHandle, forwardRef} from 'react'
import ReactCropper from 'react-cropper'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import {CropperOptions, StyleOverrides, OutputOptions} from './ReactImageCropperDropzone'

export interface RefObject {
  getCropData: () => string
}

type ReactImageCropperProps = {
  src: string
  cropper: CropperOptions
  output: OutputOptions
  styles: StyleOverrides
}

const ReactImageCropper = forwardRef((props: ReactImageCropperProps, ref: Ref<RefObject>) => {
  const {cropper: cropperOptions, output, styles, src} = props
  const cropperRef = useRef<ReactCropper>(null)
  const [cropper, setCropper] = useState<Cropper>()

  const {width, height, maxWidth, maxHeight, format, compression} = output

  useImperativeHandle(ref, () => ({
    getCropData: () => {
      if (typeof cropper !== 'undefined') {
        return cropper.getCroppedCanvas({width, height, maxWidth, maxHeight})
          .toDataURL(format, compression) as string
      }
      return ''
    },
  }))

  return (
    <ReactCropper
      src={src}
      ref={cropperRef}
      onInitialized={(instance: React.SetStateAction<Cropper | undefined>) => {
        setCropper(instance)
      }}
      {...cropperOptions}
      style={styles.cropper}
    />
  )
})

ReactImageCropper.displayName = 'ImgCropper'

export default ReactImageCropper
