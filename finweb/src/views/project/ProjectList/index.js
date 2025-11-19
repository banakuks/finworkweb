import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ActionBar from './components/ActionBar'
import ProjectListContent from './components/ProjectListContent'
import NewProjectDialog from './components/NewProjectDialog'
import { Container } from 'components/shared'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getList, getMembers } from './store/dataSlice'

injectReducer('projectList', reducer)

const ProjectList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getList())
        dispatch(getMembers())
    }, [dispatch])

    return (
        <Container className="h-full">
            <ActionBar />
            <ProjectListContent />
            <NewProjectDialog />
        </Container>
    )
}

export default ProjectList
