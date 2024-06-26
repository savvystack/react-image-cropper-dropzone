import React, {useCallback, useState, ReactElement, CSSProperties} from 'react'
import {useDropzone, DropzoneOptions} from 'react-dropzone'
import {ReactImageCropperPopup} from './ReactImageCropperPopup'
import Cropper from 'cropperjs'

export type CropperOptions = Cropper.Options

export type UserInterfaceOptions = {
  title: string | ReactElement
  save: string | ReactElement
}

export type StyleOverrides = {
  overlay?: CSSProperties
  modal?: CSSProperties
  saveButton?: CSSProperties
  title?: CSSProperties
  cropper?: CSSProperties
}

export type OutputOptions = {
  height?: number
  width?: number
  maxHeight?: number
  maxWidth?: number
  format: 'image/png' | 'image/jpeg' | 'image/webp'
  compression?: number
}

export interface ReactImageCropperDropzoneProps {
  children: React.ReactNode
  afterCrop: (dataUrl: string) => void
  cropper?: Cropper.Options
  dropzone?: DropzoneOptions
  ui?: UserInterfaceOptions
  styles?: StyleOverrides
  output?: OutputOptions
}

export const ReactImageCropperDropzone: React.FC<ReactImageCropperDropzoneProps> = ({
  children,
  afterCrop,
  cropper = {
    background: true,
    autoCropArea: 0.8,
    scalable: true,
    movable: true,
    zoomable: true,
    zoomOnTouch: true,
  },
  dropzone = {},
  ui = {title: 'Crop your picture', save: 'Save'},
  styles = {
    cropper: {height: 600, width: '100%'}
  },
  output = {format: 'image/jpeg', compression: 0.9},
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return

    const reader = new FileReader()

    reader.onabort = () => console.log('[ReactImageCropperDropzone]: File reading was aborted')
    reader.onerror = () => console.log('[ReactImageCropperDropzone]: File reading has failed')
    reader.onload = () => {
      if (reader.result) {
        setImage(reader.result as string)
        setOpen(true)
      }
    }

    reader.readAsDataURL(acceptedFiles[0])
  }, [])

  const {getRootProps, getInputProps} = useDropzone({
    maxFiles: 1,
    maxSize: 4000000,
    minSize: 0,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    ...dropzone,
    onDrop,
  })

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {children}
      </div>
      <ReactImageCropperPopup
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        img={image}
        afterCrop={afterCrop}
        cropper={cropper}
        output={output}
        ui={ui}
        styles={styles}
      />
    </>
  )
}
