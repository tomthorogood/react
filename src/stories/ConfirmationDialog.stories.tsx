import React, {useState, useRef, useCallback} from 'react'
import {Meta} from '@storybook/react'
import {BaseStyles, Box, Overlay, OverlayProps, ThemeProvider, useTheme} from '..'
import {Button} from '../Button'
import {ActionMenu} from '../ActionMenu'
import {ActionList} from '../ActionList'
import {ConfirmationDialog, useConfirm} from '../Dialog/ConfirmationDialog'

export default {
  title: 'Components/ConfirmationDialog',
  component: ConfirmationDialog,
  decorators: [
    Story => {
      // Since portal roots are registered globally, we need this line so that each storybook
      // story works in isolation.
      return (
        <ThemeProvider>
          <BaseStyles>
            <Story />
          </BaseStyles>
        </ThemeProvider>
      )
    },
  ],
} as Meta

export const BasicConfirmationDialog = () => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const onDialogClose = useCallback(() => setIsOpen(false), [])
  return (
    <>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Show dialog
      </Button>
      {isOpen && (
        <ConfirmationDialog
          title="Delete universe?"
          onClose={onDialogClose}
          confirmButtonContent="Delete it!"
          confirmButtonType="danger"
          onOutsideClick={async () => {
            await confirm({title: 'Are you sure?', content: 'Do you really want to turn this button green?'})
          }}
        >
          Deleting the universe could have disastrous effects, including but not limited to destroying all life on
          Earth.
        </ConfirmationDialog>
      )}
    </>
  )
}
export const ConfirmationOverlay = ({anchorSide}: OverlayProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const confirmButtonRef = useRef<HTMLButtonElement>(null)
  const anchorRef = useRef<HTMLDivElement>(null)
  const confirm = useConfirm()
  const closeOverlay = () => setIsOpen(false)
  return (
    <Box ref={anchorRef}>
      <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        open overlay
      </Button>
      {isOpen ? (
        <Overlay
          initialFocusRef={confirmButtonRef}
          returnFocusRef={buttonRef}
          ignoreClickRefs={[buttonRef]}
          onEscape={closeOverlay}
          onClickOutside={async () => {
            await confirm({title: 'Are you sure?', content: 'Do you really want to turn this button green?'})
          }}
          width="small"
          anchorSide={anchorSide}
        >
          <Box display="flex" flexDirection="column" p={2}>
            Are you sure? **
            <Button variant="danger" onClick={closeOverlay}>
              Cancel
            </Button>
            <Button onClick={closeOverlay} ref={confirmButtonRef}>
              Confirm
            </Button>
          </Box>
        </Overlay>
      ) : null}
    </Box>
  )
}

export const ShorthandHook = () => {
  const confirm = useConfirm()
  const {theme} = useTheme()
  const onButtonClick = useCallback(
    async (event: React.MouseEvent) => {
      if (
        (await confirm({title: 'Are you sure?', content: 'Do you really want to turn this button green?'})) &&
        event.target instanceof HTMLElement
      ) {
        event.target.style.color = theme?.colors.success.fg ?? 'green'
        event.target.textContent = "I'm green!"
      }
    },
    [confirm, theme],
  )
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Button onClick={onButtonClick} sx={{mb: 2}}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} sx={{mb: 2}}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} sx={{mb: 2}}>
        Turn me green!
      </Button>
      <Button onClick={onButtonClick} sx={{mb: 2}}>
        Turn me green!
      </Button>
    </Box>
  )
}

export const ShorthandHookFromActionMenu = () => {
  const confirm = useConfirm()
  const [text, setText] = useState('open me')
  const onButtonClick = useCallback(async () => {
    if (await confirm({title: 'Are you sure?', content: 'Do you really want to do a trick?'})) {
      setText('tada!')
    }
  }, [confirm])

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <ActionMenu>
        <ActionMenu.Button>{text}</ActionMenu.Button>

        <ActionMenu.Overlay>
          <ActionList>
            <ActionList.Item onSelect={onButtonClick}>Do a trick!</ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </Box>
  )
}
