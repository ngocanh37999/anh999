import {
  AddRoundedIcon,
  ExitToAppRoundedIcon,
  HomeRoundedIcon,
  NotificationsRoundedIcon,
  SearchIcon,
  StorefrontRoundedIcon,
  SubscriptionsRoundedIcon,
  SupervisedUserCircleRoundedIcon
} from './icons'
import * as S from './testFacebookClone.style'
import fbImgLogo from './fbImgLogo.png'
import { Avatar, IconButton } from '@material-ui/core'
export default function TestFacebookClone() {
  const photoUrl = ''
  const username = ''
  const onLogout = () => {}

  return (
    <>
      <S.Header>
        <S.HeaderLeft className="headerLeft">
          <S.Logo src={fbImgLogo} alt="fb logo" className="logo" />
          <S.SearchInput className="searchInput">
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Search" className="inputBar" />
          </S.SearchInput>
        </S.HeaderLeft>

        <S.HeaderCenter className="headerCenter">
          <S.ActiveOption className="activeOption">
            <HomeRoundedIcon fontSize="large" className="icon" />
          </S.ActiveOption>
          <S.Option className="option">
            <SubscriptionsRoundedIcon fontSize="large" className="icon" />
          </S.Option>
          <S.Option className="option">
            <StorefrontRoundedIcon fontSize="large" className="icon" />
          </S.Option>
          <S.Option className="option">
            <SupervisedUserCircleRoundedIcon
              fontSize="large"
              className="icon"
            />
          </S.Option>
        </S.HeaderCenter>

        <S.HeaderRight className="headerRight">
          <S.Info className="info">
            <Avatar src={photoUrl} />
            <h4>{username}</h4>
          </S.Info>
          <IconButton>
            <AddRoundedIcon />
          </IconButton>
          <IconButton>
            <NotificationsRoundedIcon />
          </IconButton>
          <IconButton onClick={onLogout}>
            <ExitToAppRoundedIcon />
          </IconButton>
        </S.HeaderRight>
      </S.Header>
    </>
  )
}
