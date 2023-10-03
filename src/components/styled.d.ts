import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // scrollbar
    scrollbarColor: string;
    scrollbarBackground: string;

    // animation
    defaultTransition: string;
    // buttons
    borderAddTask: string;
    buttonAddTaskColor: string;
    buttonAddTaskColorHover: string;
    buttontextColor: string;
    buttonBackgroundColorAddTask: string;
    buttonBackgroundColorAddTaskHover: string;
    buttonBackgroundColor: string;
    buttonBackgroundColorHover: string;
    buttonShadow: string;
    buttonPeriodColor: string;
    // common colors
    mainBackgroundColor: string;
    secondaryBackgroundColor: string;
    accentColor: string;
    mainTextColor: string;

    secondaryTextColor: string;
    borderColor: string;

    // AsideBar
    asideBarBackground: string;
    asideBarLogoText: string;
    asideBarTitle: string;
    asideBarIcon: string;
    asideBarIconActive: string;
    asideBarLinkText: string;
    asideBarActiveLinkText: string;
    asideBarActiveLinkBackground: string;
    asideBarLinkBackgroundHover: string;
    assideBarCloseIconColor: string;

    // Header
    headerBurgerIcon: string;

    // UserProfile
    titleTextColor: string;
    inputText: string;
    labelText: string;
    inputBorder: string;
    placeholderColor: string;

    TextColorUserProfile: string;

    // CalendarHead
    CalendarHead: string;
    CurrentDate: string;

    // Modal
    modalBorder: string;
    modalCloseIcon: string;

    // TaskModal
    taskModalTextColor: string;
    taskModalInputColor: string;
    taskModalLabelColor: string;
    taskModalTitleColor: string;
    taskModalBorder: string;

    // FeedbackModal
    feedbackLabelColor: string;
    feedbackTextareaBackgroung: string;
    feedbackTextareaBorder: string;
    feedbackCancelButton: string;
    editMiniButton: string;
    emptyStar: string;

    // WeekCalendar
    weekCalendarText: string;

    // TasksColumn
    tasksColumnBorder: string;

    // TasksColumnCard
    priorTextColor: string;

    // ChangeTaskDirModal
    changeTaskDirModalBorder: string;

    // LoginForm
    loginInputColor: string;
    loginInputBorder: string;
    backgroundColorForm: string;
    errorTagColor: string;
    correctTagColor: string;

    // CalendarToolbar
    periodActiveColor: string;
    periodActiveBackgroundColor: string;
    periodInactiveColor: string;
    periodInactiveBackgroundColor: string;
    periodBorder: string;

    // ChoosedMonth
    monthBackgroundColor: string;
    cellBorder: string;
    monthMainColor: string;
    monthHolidayColor: string;
    tableBorder: string;
    calendarDate: string;

    lowPriorityColor: string;
    mediumPriorityColor: string;
    hightPriorityColor: string;

    lowPriorityBackgoundColor: string;
    mediumPriorityBackgoundColor: string;
    hightPriorityBackgoundColor: string;

    // StatisticsSection
    periodColor: string;
    statisticsBorder: string;
  }
}
